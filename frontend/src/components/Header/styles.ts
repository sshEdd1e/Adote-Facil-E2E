import styled, { css } from 'styled-components'

export const LoginOrRegisterHeaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 3rem;
    padding-bottom: 1rem;

    background-color: ${theme.colors.gray[200]};

    h1 {
      color: ${theme.colors.white};
      font-size: 1.5rem;
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    padding: 1rem;

    background-color: ${theme.colors.gray[200]};
  `}
`
