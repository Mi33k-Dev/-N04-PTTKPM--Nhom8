package com.example.shopweb_backend.services.impl;

import com.example.shopweb_backend.customexceptions.DataNotFoundException;
import com.example.shopweb_backend.entities.OrderEntity;
import com.example.shopweb_backend.entities.UserEntity;
import com.example.shopweb_backend.enums.OrderStatus;
import com.example.shopweb_backend.models.DTO.OrderDTO;
import com.example.shopweb_backend.repositories.OrderRepository;
import com.example.shopweb_backend.repositories.UserRepository;
import com.example.shopweb_backend.services.IOrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
public class IOrdersServiceImpl implements IOrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public OrderEntity createOrder(OrderDTO orderDTO) throws Exception {
        UserEntity user = userRepository.findById(orderDTO.getUserId())
                .orElseThrow(() -> new DataNotFoundException("Cannot find user with id: "+orderDTO.getUserId()));
        modelMapper.typeMap(OrderDTO.class, OrderEntity.class)
                .addMappings(mapper -> mapper.skip(OrderEntity::setId));
        OrderEntity orderEntity = new OrderEntity();
        modelMapper.map(orderDTO, orderEntity);
        orderEntity.setUser(user);
        orderEntity.setOrderDate(new Date());
        orderEntity.setStatus(OrderStatus.PENDING);
        LocalDate shippingDate = orderDTO.getShippingDate() == null ? LocalDate.now() : orderDTO.getShippingDate();
        if (shippingDate.isBefore(LocalDate.now())) {
            throw new DataNotFoundException("Date must be at least today !");
        }
        orderEntity.setShippingDate(shippingDate);
        orderEntity.setActive(true);
        orderRepository.save(orderEntity);
        return orderEntity;
    }

    @Override
    public List<OrderEntity> getOrders(Long userId) throws Exception {
        UserEntity user = userRepository.findById(userId)
                .orElseThrow(() -> new DataNotFoundException("Cannot find user with id: "+userId));
        List<OrderEntity> orders = orderRepository.findByUserId(userId);
        return orders;
    }

    @Override
    public OrderEntity getOrder(Long orderId) throws Exception {
        return orderRepository.findById(orderId).orElse(null);
    }

    @Override
    public OrderEntity updateOrder(Long orderId, OrderDTO orderDTO) throws Exception {
        OrderEntity orderEntity = orderRepository.findById(orderId)
                .orElseThrow(() -> new DataNotFoundException("Cannot find order with id: "+orderId));
        UserEntity user = userRepository.findById(
                orderDTO.getUserId()).orElseThrow(() ->
                new DataNotFoundException("Cannot find user with id: " + orderDTO.getUserId()));
        modelMapper.typeMap(OrderDTO.class, OrderEntity.class)
                .addMappings(mapper -> mapper.skip(OrderEntity::setId));
        modelMapper.map(orderDTO, orderEntity);
        orderEntity.setUser(user);
        orderRepository.save(orderEntity);
        return orderEntity;
    }

    @Override
    public void deleteOrder(Long orderId) throws Exception {
        OrderEntity orderEntity = orderRepository.findById(orderId)
                .orElseThrow(() -> new DataNotFoundException("Cannot find order with id: "+orderId));
        if(orderEntity != null){
            orderEntity.setActive(false);
            orderRepository.save(orderEntity);
        }
    }
}
