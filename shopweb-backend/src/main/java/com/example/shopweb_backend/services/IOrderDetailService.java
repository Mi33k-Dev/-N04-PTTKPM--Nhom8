package com.example.shopweb_backend.services;

import com.example.shopweb_backend.entities.OrderDetailEntity;
import com.example.shopweb_backend.models.DTO.OrderDetailDTO;

import java.util.List;

public interface IOrderDetailService {
    public OrderDetailEntity createOrderDetail(OrderDetailDTO orderDetailDTO);
    public OrderDetailEntity getOrderDetailById(Long id);
    public List<OrderDetailEntity> getOrderDetails(Long orderId);
    public OrderDetailEntity updateOrderDetail(Long id, OrderDetailDTO orderDetailDTO);
    public void deleteOrderDetail(Long id);
}
