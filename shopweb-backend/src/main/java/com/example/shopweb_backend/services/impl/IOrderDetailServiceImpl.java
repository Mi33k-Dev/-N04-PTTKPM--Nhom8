package com.example.shopweb_backend.services.impl;

import com.example.shopweb_backend.entities.OrderDetailEntity;
import com.example.shopweb_backend.entities.OrderEntity;
import com.example.shopweb_backend.entities.ProductEntity;
import com.example.shopweb_backend.models.DTO.OrderDTO;
import com.example.shopweb_backend.models.DTO.OrderDetailDTO;
import com.example.shopweb_backend.repositories.OrderDetailRepository;
import com.example.shopweb_backend.repositories.OrderRepository;
import com.example.shopweb_backend.repositories.ProductRepository;
import com.example.shopweb_backend.services.IOrderDetailService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IOrderDetailServiceImpl implements IOrderDetailService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public OrderDetailEntity createOrderDetail(OrderDetailDTO orderDetailDTO) {
        ProductEntity product = productRepository.findById(orderDetailDTO.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found id: " + orderDetailDTO.getProductId()));
        OrderEntity order = orderRepository.findById(orderDetailDTO.getOrderId())
                .orElseThrow(() -> new RuntimeException("Order not found id: " + orderDetailDTO.getOrderId()));
        modelMapper.typeMap(OrderDetailDTO.class, OrderDetailEntity.class)
                .addMappings(mapper -> mapper.skip(OrderDetailEntity::setId));
        OrderDetailEntity orderDetailEntity = new OrderDetailEntity();
        modelMapper.map(orderDetailDTO, OrderDetailEntity.class);
        orderDetailEntity.setOrder(order);
        orderDetailEntity.setProduct(product);
        return orderDetailRepository.save(orderDetailEntity);
    }

    @Override
    public OrderDetailEntity getOrderDetailById(Long id) {
        return orderDetailRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("OrderDetail not found id: " + id));
    }

    @Override
    public List<OrderDetailEntity> getOrderDetails(Long orderId) {
        List<OrderDetailEntity> orderDetailEntities = orderDetailRepository.findByOrderId(orderId);
        return orderDetailEntities;
    }

    @Override
    public OrderDetailEntity updateOrderDetail(Long id, OrderDetailDTO orderDetailDTO) {
        OrderDetailEntity orderDetailEntity = orderDetailRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("OrderDetail not found id: " + id));
        ProductEntity product = productRepository.findById(orderDetailDTO.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found id: " + orderDetailDTO.getProductId()));
        OrderEntity order = orderRepository.findById(orderDetailDTO.getOrderId())
                .orElseThrow(() -> new RuntimeException("Order not found id: " + orderDetailDTO.getOrderId()));
        modelMapper.typeMap(OrderDetailDTO.class, OrderDetailEntity.class)
                .addMappings(mapper -> mapper.skip(OrderDetailEntity::setId));
        modelMapper.map(orderDetailDTO, OrderDetailEntity.class);
        orderDetailEntity.setProduct(product);
        orderDetailEntity.setOrder(order);
        return orderDetailRepository.save(orderDetailEntity);

    }

    @Override
    public void deleteOrderDetail(Long id) {
        orderDetailRepository.deleteById(id);
    }


}
