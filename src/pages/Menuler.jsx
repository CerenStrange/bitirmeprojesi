import React, { useEffect, useState } from 'react'


function Menuler() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("src/data/burfas.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            })
    }, []);

    return (
        <>
            <div className='card'>
                <h1>MENÜLER</h1>
                <h4>Tesislere göre alfabetik olarak sıralanmıştır</h4>
            </div>
            <br />
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {data.map(item => (
                    <div key={item.id} className="card">
                        <div className='card-header'>
                            <h2>{item.subeadi}</h2>
                        </div>
                        <div className='card-body'>
                        <h4 className='card-title'> {item.kategoriadi}</h4>
                        <p> {item.urunadi}</p>
                        <p>{item.urunnotu}</p>
                        <p>{item.fiyat} TL</p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Menuler