import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Annoncement from '../components/Annoncement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
  color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`

`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  flex:3;
`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
  flex:1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

const SummaryButton = styled.div`

`

const Product = styled.div`
  display: flex;
  justify-content: space-around;
`

const ProductDetail = styled.div`
  flex:2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
`

const ProductName = styled.span`

`

const ProductId = styled.span`

`

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`

const ProductSize = styled.span`

`

const PriceDetail = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Annoncement />
      <Wrapper>
        <Title>VOTRE PANIER</Title>
        <Top>
          <TopButton>CONTINUER MES ACHATS</TopButton>
          <TopTexts>
            <TopText>Panier(2)</TopText>
            <TopText>Vos favoris (0)</TopText>
          </TopTexts>
          <TopButton type="filled">TERMINER MA COMMANDE</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1608667508764-33cf0726b13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                <Details>
                  <ProductName><b>Produit:</b>JESSIE THUNDER</ProductName>
                  <ProductId><b>ID:</b>123456</ProductId>
                  <ProductColor color="pink"/>
                  <ProductSize><b>Size:</b>38</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>114€</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1610197251868-2adbd6db7466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80" />
                <Details>
                  <ProductName><b>Produit:</b>NOME PULL</ProductName>
                  <ProductId><b>ID:</b>123456</ProductId>
                  <ProductColor color="gray"/>
                  <ProductSize><b>Size:</b>S</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>50€</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>PANIER</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sous Total</SummaryItemText>
              <SummaryItemText>164€</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimation d'envoi</SummaryItemText>
              <SummaryItemText>4.90€</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Code Promo</SummaryItemText>
              <SummaryItemText>-4.90€</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemText>164€</SummaryItemText>
            </SummaryItem>
            <Button>PAIEMENT</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
