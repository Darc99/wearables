import pic from '../../img/hat.jpg';
import pic2 from '../../img/jac.jpg';
import pic3 from '../../img/snk.jpg';
import pic4 from '../../img/wm.jpg';
import pic5 from '../../img/mn.jpg';

const INITIAL_STATE = {
    sections:[
        {
          title: 'hats',
          //imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          imageUrl: `${pic}`,
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          //imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          imageUrl: `${pic2}`,
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          //imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          imageUrl: `${pic3}`,
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          //imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          imageUrl: `${pic4}`,
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          //imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
          imageUrl: `${pic5}`,
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }

    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;