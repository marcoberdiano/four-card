import styled from 'styled-components';

export const Top = styled.div`
    &:before {
            content: '';
            background: ${props => props.bg};
            height: 5px;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
    }
`;