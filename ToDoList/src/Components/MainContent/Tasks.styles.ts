import styled, { css } from "styled-components";

type isCheckedProps = {
    isCompleted?: boolean
}

export const TaskItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    flex-grow: 1;
    padding: 1rem;
    border-radius: 8px;
    background-color: var(--gray-500);
    min-height: calc(4.5rem - 2rem);
`;

export const Wrapper = styled.div<isCheckedProps>`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    overflow: hidden;

    p {
        font-size: 0.875rem;
        line-height: 1.4;
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        ${props => 
            props.isCompleted && css`text-decoration:line-through`
        }
    }
`;

export const Check = styled.button<isCheckedProps>`
    appearance: none;
    border-radius: 50%;
    cursor: pointer;
    flex-shrink: 0;

    ${props => {
        if(props.isCompleted){
            return css`
                display: flex;
                align-items: center;
                justify-content: center;
                width: calc(1.125rem + 2px);
                height: calc(1.125rem + 2px);
                background-color: var(--PurpleDark);
                border: none;
            `;
        } else {
            return css`
                width: 1.125rem;
                height: 1.125rem;
                background-color: transparent;
                border: 2px solid var(--blueDark);
            `;
        }
    }}
`;

export const Trash = styled.button`
    appearance: none;
    background-color: transparent;
    border: none;
    color: var(--gray-300);
    cursor: pointer;

    svg {
        flex-shrink: 0;
    }
`;