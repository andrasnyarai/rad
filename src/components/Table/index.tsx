"use client";

import { Fragment } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Exchange } from "@/lib/types";

const imageSize = 50;
const itemPadding = 5;

const Container = styled.div`
  min-width: 700px;
  padding: 15px;
  max-width: 1300px;
  margin: 0 auto;
`;

const Background = styled.div`
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
`;

const HeaderTitle = styled.div`
  color: #b490ca;
`;

const TableBody = styled.div`
  display: grid;
  grid-template-columns: auto repeat(6, 1fr);
  word-break: break-word;
  grid-gap: 1.5px;

  > div {
    background-color: white;
    padding: ${itemPadding}px;
  }
`;

const Controls = styled.div`
  padding: 5px;
  display: flex;

  :first-child {
    margin-right: 5px;
  }
`;

type Props = {
  exchanges: Exchange[];
  pageIndex: number;
};

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export const Table = ({ exchanges, pageIndex }: Props) => {
  return (
    <Container>
      <Background>
        <TableBody>
          <HeaderTitle style={{ width: 50 }} />
          <HeaderTitle>Exchange name</HeaderTitle>
          <HeaderTitle>Year established</HeaderTitle>
          <HeaderTitle>Country</HeaderTitle>
          <HeaderTitle>Trust score</HeaderTitle>
          <HeaderTitle>24h volume / BTC</HeaderTitle>
          <HeaderTitle>Normalized</HeaderTitle>
          {exchanges.map((exchange) => {
            return (
              <Fragment key={exchange.id}>
                <div
                  style={{ display: "flex", cursor: "pointer" }}
                  onClick={() => openInNewTab(exchange.url)}
                >
                  <Image
                    src={exchange.image}
                    width={imageSize}
                    height={imageSize}
                    alt={exchange.name}
                  />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => openInNewTab(exchange.url)}
                >
                  {exchange.name}
                </div>
                <div>{exchange.year_established}</div>
                <div>{exchange.country}</div>
                <div>{exchange.trust_score}</div>
                <div>{exchange.trade_volume_24h_btc}</div>
                <div>{exchange.trade_volume_24h_btc_normalized}</div>
              </Fragment>
            );
          })}
        </TableBody>
      </Background>
      <Controls>
        {pageIndex > 1 && (
          <Link href={`/exchanges/${pageIndex - 1 || 1}`}>previous</Link>
        )}
        <Link href={`/exchanges/${pageIndex + 1 || 1}`}>next</Link>
      </Controls>
    </Container>
  );
};
