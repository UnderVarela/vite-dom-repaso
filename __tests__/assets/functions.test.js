import { esNumeroString } from '../../assets/functions'

/* eslint-disable no-undef */
test('Sin paso de parámetros', () => {
  const sinParametros = () => {
    esNumeroString()
  }
  expect(sinParametros).toThrowError()
})
