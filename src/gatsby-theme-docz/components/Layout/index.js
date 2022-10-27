import React, { useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { MainContainer } from '../MainContainer';
import { TitleCard } from '../TitleCard';

const GlobalStyles = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
    .container{
        display: flex;
    }
    .scroll-css{
        height: calc(100vh - 52px);
        overflow: auto;
    }
    .main-container{
        display: flex;
    }
    .contain-max{
        max-width: 47rem;
    }
    .contain-min{
        min-width: 50rem;
    }
`;

const LayoutContainer = styled.div`
    @media screen and (min-width: 48rem) {
        margin-left: 19.5rem;
    }
`;

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const TableOfContentsWrapper = styled.div`
    padding: 2rem 1rem 0 1rem;
    display: none;
    position: sticky;
    position: -webkit-sticky;
    vertical-align: top;
    top: 0;

    @media screen and (min-width: 60rem) {
        display: inline-block;
    }
`;

const TableOfContentsTitle = styled.div`
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #001e3e;
`;

const SectionLink = styled.a`
    font-size: 0.875rem;
    display: block;
    color: #637689;
    cursor: pointer;
    text-decoration: none;
    margin-top: 0.25rem;

    &:hover {
        text-decoration: underline;
        color: #001e3e;
    }
`;

export const Layout = ({ children, doc }) => {
    const [open, setOpen] = useState(false);
    const nav = useRef();

    const { headings, cardHeadline, cardSubHeadline } = doc.value;
    const displayableHeadings = headings.filter(it => it.depth === 2);

    return (
        <div data-testid="layout">
            <GlobalStyles />
            <MainBox>
                <Header onOpen={() => setOpen(s => !s)} />
                <div className="container">
                    <Sidebar
                        style={{ flexBasis: '25%' }}
                        ref={nav}
                        open={open}
                        onFocus={() => setOpen(true)}
                        onBlur={() => setOpen(false)}
                        onClick={() => setOpen(false)}
                    />
                    <LayoutContainer className={`${cardHeadline ? 'scroll-css' : ''}`}>
                        <TitleCard headline={cardHeadline} subHeadline={cardSubHeadline} />
                        <div className={`${!cardHeadline ? 'scroll-css main-container' : 'main-container'}`}>
                            <MainContainer
                                id="main"
                                data-testid="main-container"
                                style={{}}
                                className={`${displayableHeadings.length > 1 ? 'contain-max' : 'contain-min'}`}
                            >
                                {children}
                            </MainContainer>
                            {displayableHeadings.length > 1 && (
                                <TableOfContentsWrapper>
                                    <TableOfContentsTitle>Table of contents</TableOfContentsTitle>
                                    {displayableHeadings.map(heading => (
                                        <SectionLink key={heading.slug} href={`#${heading.slug}`}>
                                            {heading.value}
                                        </SectionLink>
                                    ))}
                                </TableOfContentsWrapper>
                            )}
                        </div>
                    </LayoutContainer>
                </div>
            </MainBox>
        </div>
    );
};
