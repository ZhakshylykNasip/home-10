import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { useContextStore } from "../../store/ContextStore";

export const ProductList = () => {
  const {
    store = [],
    incProduct,
    decProduct,
    removeProduct,
  } = useContextStore();

  const totalPrice = store?.product.map((item) => {
    if (item.quantity === 0) {
      const result = { ...item, price: (item.price = 0) };
      return result.price;
    } else {
      return item.price;
    }
  });

  const resultTotal = totalPrice.reduce((a, b) => a + b, 0);

  return (
    <Continer>
      <div>
        <Table>
          <Thead>
            <p className="id">#</p>
            <p style={{ marginBottom: "0px" }}>Product</p>
            <p>Product Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </Thead>
          <ol>
            {store.product.map((item) => {
              return (
                item.quantity !== 0 && (
                  <li style={{ fontSize: "50px" }} key={item.id}>
                    <Tbody>
                      <TImg>
                        <img src={item.url} alt="photos" />
                      </TImg>
                      <div>{item.productName}</div>
                      <div>$ {item.price}</div>

                      <ContainerCount>
                        <Button
                          bgColor="grey"
                          width="30px"
                          onClick={() => decProduct(item.id)}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          bgColor="grey"
                          width="30px"
                          onClick={() => incProduct(item.id)}
                        >
                          +
                        </Button>
                      </ContainerCount>
                      <div>
                        <Button
                          height="35px"
                          bgColor="red"
                          onClick={() => removeProduct(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </Tbody>
                  </li>
                )
              );
            })}
          </ol>
        </Table>
      </div>
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "3rem" }}>TOTAL: {resultTotal}</p>
      </div>
    </Continer>
  );
};

const Continer = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 1.6rem;
  font-weight: 600;

  border-top: 3px solid #dcdcdc;

  .id {
    width: 100px;
    display: flex;
    justify-content: center;
    margin-top: -10px;
  }

  p {
    width: 240px;
    height: 20px;
    display: flex;
    justify-content: center;
    margin-top: -10px;
  }
`;

const TImg = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    object-fit: contain;
    border-radius: 20px;
  }
`;

const Tbody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  border-top: 3px solid #dcdcdc;
  padding: 40px 0px 40px 0px;

  .id {
    width: 100px;
    font-weight: 600;
    display: flex;
    justify-content: center;
  }

  div {
    width: 240px;
    display: flex;
    justify-content: center;
  }
`;

const ContainerCount = styled.div`
  display: flex;
  gap: 10px;
`;
