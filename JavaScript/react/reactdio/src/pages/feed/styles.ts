import styled from "styled-components";
import { IFeedStyled } from "./types";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    justify-content: space-around;
`

export const Title = styled.h3`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 24px;
`

export const TitleHeightlight = styled.h3`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;
`

export const Column = styled.div<IFeedStyled>`
    flex:${({flex}) => flex};
    padding-right: 24px;
`