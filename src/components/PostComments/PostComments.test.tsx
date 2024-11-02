import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

const mock = [
    {
        id:1,
        comment: 'Que legal!'
    },
    {
        id:2,
        comment: 'Adorei isso.'
    }
]

let index = 0
let mensagem = mock[index].comment

function comentarioNovo(){
    index = (index + 1)
    mensagem = mock[index].comment
}

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve renderizar o primeiro comentário', async () => {
        render(<Post/>)
        const botao = screen.getByTestId('btn-comentario')
        const areaTexto = screen.getByTestId('textArea')
        fireEvent.change(areaTexto, {target:{value: mensagem}})
        fireEvent.click(botao)
        expect(screen.getByText('Que legal!')).toBeInTheDocument()

        comentarioNovo()
    })

    test('Deve renderizar o segundo comentário', async () => {
        render(<Post/>)
        const botao = screen.getByTestId('btn-comentario')
        const areaTexto = screen.getByTestId('textArea')
        fireEvent.change(areaTexto, {target:{value: mensagem}})
        fireEvent.click(botao)
        expect(screen.getByText('Adorei isso.')).toBeInTheDocument()

    })

})