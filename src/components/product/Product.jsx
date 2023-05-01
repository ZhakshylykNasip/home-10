import styled from "styled-components";
import { Button } from "../UI/Button";
import { useContextStore } from "../../store/ContextStore";

export const Product = () => {
  const { store, addProduct } = useContextStore();
  // console.log(store,'store');

  return (
    <>
      <Wrapper>
        {store.product.map((item) => (
          <Container style={{ listStyle: "none" }} key={item.id}>
            <img src={item.url} alt="product photos" />
            <div>
              <h2>
                {item.productName} - $ {item.staticPrice}
              </h2>

              <Button
                width="150px"
                height="40px"
                bgColor="green"
                onClick={() => addProduct(item.id)}
                disabled={item.quantity > 0}
              >
                Add
              </Button>
            </div>
          </Container>
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 5%;
  gap: 40px;
  justify-content: center;
`;

const Container = styled.div`
  background-color: #454444;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 450px;
  border-radius: 20px;
  box-shadow: 1px 1px 11px 4px rgb(151, 151, 151);
  img {
    width: 220px;
    height: 220px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
`;
