import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectorIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionOverviewCotainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container'

import withSpinner from '../../components/with-spinner/with-spinner.component'

import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
    
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route 
                    exact path={`${match.path}`} 
                    component={CollectionOverviewCotainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component= {CollectionPageContainer}
                />
            </div>
        );
    }
} 


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);

