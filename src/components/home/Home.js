import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Content from '../content/Content';

const Home = (props) => {
    const { category, setCategorie, isfiltered, listfiltered, datas } = props;
    return (
        <div className="row">
            <div className="col-sm-3">
                <Sidebar setcategorie={setCategorie} category={category} />
            </div>
            <div className="col-sm-9">

                <Content data={isfiltered ? listfiltered : datas} />

            </div>
        </div>
    );
};

export default Home;