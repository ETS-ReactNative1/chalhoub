import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../src/pages/home';

describe('HomeScreen', () => {
  it('should load home page', () => {
    const page = render(<HomeScreen/>)
    const productList= page.getAllByTestId("productList")
  })
  
})
