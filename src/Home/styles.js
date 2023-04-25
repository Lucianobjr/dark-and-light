import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${p => p.theme.background};
    align-items: center;
    justify-content: center;
`;

export const Name = styled.Text`
    font-size: 30px;
    color: ${p => p.theme.color};
`;

export const Description = styled.Text`
    margin-top: 12px;
    font-style: italic;
    color: ${p => p.theme.color};
    background-color: ${p => p.theme.tag};
    padding: 8px 20px;
`;
