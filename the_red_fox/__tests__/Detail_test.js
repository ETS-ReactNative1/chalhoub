import React from 'react';
import {render} from '@testing-library/react-native';
import Detail from '../src/pages/detail';

describe('DetailScreen', () => {
  
  it('should load detail page', () => {
    const page = render(<Detail/>)
    const productList= page.getAllByTestId("related")
  })
})