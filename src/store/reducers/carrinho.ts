import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CarrinhotState = {
  itens: Game[]
  estaAberto: boolean
}

const initialState: CarrinhotState = {
  itens: [],
  estaAberto: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.itens.find((item) => item.id === action.payload.id)

      if (!game) {
        state.itens.push(action.payload)
      } else {
        alert('O jogo já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.estaAberto = true
    },
    close: (state) => {
      state.estaAberto = false
    }
  }
})

export const { add, open, close, remove } = carrinhoSlice.actions
export default carrinhoSlice.reducer
