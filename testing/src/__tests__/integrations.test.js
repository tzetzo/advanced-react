import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install(); //moxios intercepts any axios requests and responds with the below
  moxios.stubRequest('http://jsonplaceholder.typicode.com/albums', {
    status: 200,
    response: [{title: 'Fetched #1'}, {title: 'Fetched #2'}]
  })
})

afterEach(() => {
  moxios.uninstall()
;})

it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  wrapped.find('.test-fetch-comments').simulate('click')

  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  })
})
