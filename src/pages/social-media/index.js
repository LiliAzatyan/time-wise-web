// import React from "react";
// import { memo } from "react";
// import React, { useState } from "react";

// const SocialMedia = () => {

//     return (<>
//     SOCIAL MEDIA
//     </>)
// };

// export default memo(SocialMedia);


import React, { useState } from "react";
import { memo } from "react";
import './style.css'

const SocialMedia = () => {
    const [data, setData] = useState('');
    const cominSon = () => {
        setData('СOMMING SON')
    }
    return (
    <>
    <div className="d1">
         <div className="main">
            <input type="text" className="inp" placeholder="search"/>
            <div>
                <button className="btn" onClick={() => cominSon()}>My friends</button>
                <button className="btn" onClick={() => cominSon()}>add friends</button>
            </div>
            <button className="btnName" onClick={() => cominSon()}>Name</button>
            <button className="btnName" onClick={() => cominSon()}>Name</button>
            <button className="btnName" onClick={() => cominSon()}>Name</button>
         </div>
         <h5>{data}</h5>
    </div>
    </>)
};

export default memo(SocialMedia);

