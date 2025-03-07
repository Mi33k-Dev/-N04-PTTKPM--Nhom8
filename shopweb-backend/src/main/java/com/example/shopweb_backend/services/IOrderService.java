package com.example.shopweb_backend.services;

import com.example.shopweb_backend.entities.OrderEntity;
import com.example.shopweb_backend.models.DTO.OrderDTO;

import java.util.List;

public interface IOrderService {
    public OrderEntity createOrder(OrderDTO orderDTO) throws Exception;
    public List<OrderEntity> getOrders(Long userId) throws Exception;
    public OrderEntity getOrder(Long orderId) throws Exception;
    public OrderEntity updateOrder(Long orderId, OrderDTO orderDTO) throws Exception;
    public void deleteOrder(Long orderId) throws Exception;
}
