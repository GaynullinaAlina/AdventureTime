import React, { useState, memo } from "react";
import { Card, Text, CardBody, Box, Button, HStack } from "@chakra-ui/react";
import ButtonBlank from "../../widgets/Button/Button";
import { useAppDispatch } from "../../redux/hooks";
import { accepteOrder, deleteOrder } from "../../redux/thunkActions";


export default function SingleApplication({ order }) {
  const dispatch = useAppDispatch();
  console.log("eto order v SingleApplecation ===>", order);
  const commitHandler = async () => {
    dispatch(accepteOrder(order.id));
  };
  const rejectHandler = async () => {
    dispatch(deleteOrder(order.id));
  };
  return (
    <Card>
      <Box
        width="300px"
        height="200px"
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        backgroundColor="gray.200"
      >
        <Text>Название тура: {order?.Tour?.name}</Text>
        <Text>
          Кто бронирует: {order?.user?.firstName} {order?.user?.lastName}
        </Text>
        <Text>Бронируемых мест: {order?.peoplesBooked}</Text>
        <Text>
          Сумма брони: {order?.Tour?.price * order?.peoplesBooked} Рублей
        </Text>
        <HStack justify="space-between">
          <Button onClick={commitHandler} colorScheme="green" mt="5px" padding={'2px'} variant="outline" size='s'>
            Принять
          </Button>
          <Button onClick={rejectHandler} colorScheme="red" mt="5px" padding={'1px'} variant="outline" size='s'>
            Отклонить
          </Button>
        </HStack>
      </Box>
    </Card>
  );
}
