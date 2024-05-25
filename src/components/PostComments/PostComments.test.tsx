import { fireEvent, render, screen } from '@testing-library/react';

import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve adicionar dois comentários corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();

        // Typing first comment
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentário adicionado via testes',
            }
        })
        fireEvent.click(screen.getByTestId('comment-button'))


        // Typing second comment
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Segundo comentário adicionado via testes',
            }
        })

        fireEvent.click(screen.getByTestId('comment-button'))

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2)

    });
});