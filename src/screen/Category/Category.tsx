import React from "react";
import styled from "styled-components";
import { HeaderWeb } from "../../components/Header.Web";

const BannerPrincipal = styled.div`
  width: 98%;
  height: 400px;
  background: red;
  margin: 0 auto;
  border-radius: 24px;
  margin-bottom: 68px;
`;

const SectionContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

const FilterBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 17%;
  align-self: start;
  height: 100%;
  margin-right: 13px;
`;

const ContentBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-around;
   
`

const Content = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-around;

  
 
`;

const Card = styled.div`
  width: 286px;
  margin-bottom: 64px;
`;
const Description = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Avaliacao = styled.div`
  display: flex;
`;

const Estrela = styled.div`
  display: flex;
`;

const Price = styled.div`
  display: flex;
`;

const ChecksBox = styled.div``;

const CheckContent = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Tags = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  margin-bottom: 15px;
`;

const FilterBarH = styled.div`
  display: flex;
  width:100%;
  margin-left:40px;

`;

const ContainerH = styled.div`
  display:flex;
  align-items: center;
  h4{
    font-size:12px;
  }
  div{
    width:24px;
    height:24px;
    background:#F1F1F1;
    text-align:center;
    border-radius:4px;

    p{
      color:#626262;

    }
  }
`

const ContainerHTwo = styled.div`
  display:flex;
  align-items: center;
  h4{
    font-size:12px;
  }
  select{
    width:106px;
    height:24px;
    border:none;
    border-radius:4px;
    font-size:12px;
  }

    
  
`

import { FooterWeb } from "../../components/Footer.Web";
import bolsa from "./image.png";

import grid from "./icon/icon/grid.png";
import sort from "./icon/icon/sort.png";
import like from "../../components/img/coracao.png";
import estrela from "./icon/Vector-1.png";
import estrela2 from "./icon/Vector-4.png";
import plus from "../../components/img/plus.png";
import minus from "../../components/img/small-minus.png";
export function Category() {
  return (
    <>
      <HeaderWeb />
      <BannerPrincipal></BannerPrincipal>
      <SectionContent>
        <FilterBar>
          <Tags>
            {" "}
            <p>Size</p>
            <img src={plus} alt="plus" />
          </Tags>
          <Tags>
            {" "}
            <p>Color</p>
            <img src={minus} alt="plus" />
          </Tags>
          <ChecksBox>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <Tags>
              {" "}
              <p>Size</p>
              <img src={plus} alt="plus" />
            </Tags>
            <Tags>
              {" "}
              <p>Size</p>
              <img src={plus} alt="plus" />
            </Tags>
            <Tags>
              {" "}
              <p>Size</p>
              <img src={plus} alt="plus" />
            </Tags>
            <Tags>
              {" "}
              <p>Size</p>
              <img src={plus} alt="plus" />
            </Tags>
          </ChecksBox>
        </FilterBar>
        <Content>
          <FilterBarH>
            <div>
              <img src={grid} alt="grid" />
              <img src={sort} alt="sort" />
            </div>
            <h3>Showing 1 - 40 of 145 items</h3>
            <ContainerH>
              <h4>To Show</h4>
              <div>
                <p>9</p>
              </div>
            </ContainerH>
            <ContainerHTwo>
              <h4>Sort By</h4>
              <select name="" id="">
                <option value="">Position</option>
                <option value="">Position</option>
                <option value="">Position</option>
                <option value="">Position</option>
                <option value="">Position</option>
                <option value="">Position</option>

              </select>
            </ContainerHTwo>
          </FilterBarH>
          <ContentBox>
          <Card>
            <img src={bolsa} alt="bolsa" />
            <Description>
              <div>
                <h4>Grande</h4>
                <img src={like} alt="like" />
              </div>
              <p>Blossom Pouch</p>
              <Avaliacao>
                <Estrela>
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela2} alt="" />
                </Estrela>
                <p>43 Ratings</p>
              </Avaliacao>
              <Price>
                <h4>$39.49</h4>
                <s>$78.66</s>
                <h5>50% OFF</h5>
              </Price>
            </Description>
          </Card>
          <Card>
            <img src={bolsa} alt="bolsa" />
            <Description>
              <div>
                <h4>Grande</h4>
                <img src={like} alt="like" />
              </div>
              <p>Blossom Pouch</p>
              <Avaliacao>
                <Estrela>
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela2} alt="" />
                </Estrela>
                <p>43 Ratings</p>
              </Avaliacao>
              <Price>
                <h4>$39.49</h4>
                <s>$78.66</s>
                <h5>50% OFF</h5>
              </Price>
            </Description>
          </Card>
          <Card>
            <img src={bolsa} alt="bolsa" />
            <Description>
              <div>
                <h4>Grande</h4>
                <img src={like} alt="like" />
              </div>
              <p>Blossom Pouch</p>
              <Avaliacao>
                <Estrela>
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela2} alt="" />
                </Estrela>
                <p>43 Ratings</p>
              </Avaliacao>
              <Price>
                <h4>$39.49</h4>
                <s>$78.66</s>
                <h5>50% OFF</h5>
              </Price>
            </Description>
          </Card>
          <Card>
            <img src={bolsa} alt="bolsa" />
            <Description>
              <div>
                <h4>Grande</h4>
                <img src={like} alt="like" />
              </div>
              <p>Blossom Pouch</p>
              <Avaliacao>
                <Estrela>
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela2} alt="" />
                </Estrela>
                <p>43 Ratings</p>
              </Avaliacao>
              <Price>
                <h4>$39.49</h4>
                <s>$78.66</s>
                <h5>50% OFF</h5>
              </Price>
            </Description>
          </Card>
          <Card>
            <img src={bolsa} alt="bolsa" />
            <Description>
              <div>
                <h4>Grande</h4>
                <img src={like} alt="like" />
              </div>
              <p>Blossom Pouch</p>
              <Avaliacao>
                <Estrela>
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela2} alt="" />
                </Estrela>
                <p>43 Ratings</p>
              </Avaliacao>
              <Price>
                <h4>$39.49</h4>
                <s>$78.66</s>
                <h5>50% OFF</h5>
              </Price>
            </Description>
          </Card>
          <Card>
            <img src={bolsa} alt="bolsa" />
            <Description>
              <div>
                <h4>Grande</h4>
                <img src={like} alt="like" />
              </div>
              <p>Blossom Pouch</p>
              <Avaliacao>
                <Estrela>
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela2} alt="" />
                </Estrela>
                <p>43 Ratings</p>
              </Avaliacao>
              <Price>
                <h4>$39.49</h4>
                <s>$78.66</s>
                <h5>50% OFF</h5>
              </Price>
            </Description>
          </Card>
          <Card>
            <img src={bolsa} alt="bolsa" />
            <Description>
              <div>
                <h4>Grande</h4>
                <img src={like} alt="like" />
              </div>
              <p>Blossom Pouch</p>
              <Avaliacao>
                <Estrela>
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela2} alt="" />
                </Estrela>
                <p>43 Ratings</p>
              </Avaliacao>
              <Price>
                <h4>$39.49</h4>
                <s>$78.66</s>
                <h5>50% OFF</h5>
              </Price>
            </Description>
          </Card>
          <Card>
            <img src={bolsa} alt="bolsa" />
            <Description>
              <div>
                <h4>Grande</h4>
                <img src={like} alt="like" />
              </div>
              <p>Blossom Pouch</p>
              <Avaliacao>
                <Estrela>
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela2} alt="" />
                </Estrela>
                <p>43 Ratings</p>
              </Avaliacao>
              <Price>
                <h4>$39.49</h4>
                <s>$78.66</s>
                <h5>50% OFF</h5>
              </Price>
            </Description>
          </Card>
          <Card>
            <img src={bolsa} alt="bolsa" />
            <Description>
              <div>
                <h4>Grande</h4>
                <img src={like} alt="like" />
              </div>
              <p>Blossom Pouch</p>
              <Avaliacao>
                <Estrela>
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela} alt="" />
                  <img src={estrela2} alt="" />
                </Estrela>
                <p>43 Ratings</p>
              </Avaliacao>
              <Price>
                <h4>$39.49</h4>
                <s>$78.66</s>
                <h5>50% OFF</h5>
              </Price>
            </Description>
          </Card>
          </ContentBox>
        </Content>
      </SectionContent>

      <FooterWeb />
    </>
  );
}
