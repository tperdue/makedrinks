import React, { useState } from 'react';
import { connect } from 'react-redux';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import { addFacetAndSearch, removeFacetAndSearch } from '../../../../redux-store/actions/selected-facets'


const FacetResult = (props) => {

    const {
        facetInfo,
        selected,
        addFacetAndSearch,
        removeFacetAndSearch
    } = props

    const handleChange = (name) => (event) => {
        setIsChecked(event.target.checked);
        if (event.target.checked) {
            addFacetAndSearch(facetInfo.searchKey);
        }

        else {
            removeFacetAndSearch(facetInfo.searchKey)
        }
    }

    const [isChecked, setIsChecked] = useState(selected)

    const lableText = (facetInfo) => `${facetInfo.name}(${facetInfo.value})`


    return (
        <>
            <ListItem>

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isChecked}
                            onChange={handleChange(facetInfo.searchKey)}
                            value={facetInfo.searchKey} />
                    }
                    label={lableText(facetInfo)}
                />

            </ListItem>
            <Divider />
        </>
    )
}


const mapStateToProps = (state, ownProps) => {
    return ownProps
}
const mapDispatchToProps = {
    addFacetAndSearch,
    removeFacetAndSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(FacetResult);