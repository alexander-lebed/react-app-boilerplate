// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme'
import Listing from './index';
import Item from './Item';

describe('Listing', () => {
    const props = {
        list: JSON.parse(dataString)
    };

    test('should match snapshot', () => {
        const wrapper = renderer.create(<Listing {...props} />);
        const tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should render list', () => {
        const wrapper = mount(<Listing {...props} />);
        const itemComp = wrapper.find(Item);
        expect(itemComp.exists()).toEqual(true);
        expect(itemComp.length).toEqual(3);
    })
});

const dataString = `
[
  {
    "id": "j54654jk4k",
    "title": "MovieName A",
    "label": "4,99 €"
  },
  {
    "id": "bg45tgeafn",
    "title": "MovieName B",
    "label": "3,99 €"
  },
  {
    "id": "456il45tf3",
    "title": "MovieName C",
    "label": "2,99 €"
  }
]
`;
