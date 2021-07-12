import React from 'react';
import { SemanticTEXTALIGNMENTS } from 'semantic-ui-react';
import styled from 'styled-components';

export interface IProps {
    backgroundColor?: string;
    gradientBackground?: string;
    paddingRight?: string | number;
    paddingLeft?: string | number;
    fluid?: boolean;
    width?: number | string;
    textAlign?: SemanticTEXTALIGNMENTS;
    border?: string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
}

const Container = styled.div<IProps>`
    background: ${(props) => props.backgroundColor};
    background: ${(props) => props.gradientBackground};
    padding-right: ${(props) => props.paddingRight};
    padding-left: ${(props) => props.paddingLeft};
    width: ${(props) => (props.fluid ? '100%' : props.width)};
    text-align: ${(props) => props.textAlign};
    border: ${(props) => props.border};
    padding-top: ${(props) => props.paddingTop};
    padding-bottom: ${(props) => props.paddingBottom};
`;

Container.defaultProps = {
    backgroundColor: 'rgb(254, 254, 254)',
    gradientBackground: 'radial-gradient(circle, rgba(254, 254, 254, 1) 0%, rgba(237, 237, 237, 1) 100%)',
    paddingRight: '5%',
    paddingLeft: '5%',
    fluid: true,
    width: 0,
    textAlign: 'left',
    border: 'none',
    paddingTop: '3%',
    paddingBottom: '3%',
};

export default Container;
