import cls from './ServiceList.module.css';
import { useParams } from 'react-router-dom';
import { dataServiceList } from './dataServiceList';

const ServiceList = ({ params }) => {
    const { id } = useParams();
    let data = dataServiceList[id];

    return (
        <section className={ cls.big_container }>
            <div className={ cls.imageList }>
                <img src={`/images/${data.img1}.jpg`} alt="Service example" />
                <img src={`/images/${data.img2}.jpg`} alt="Service example" />
                <img src={`/images/${data.img3}.jpg`} alt="Service example" />
                <img src={`/images/${data.img4}.jpg`} alt="Service example" />
                <img src={`/images/${data.img5}.jpg`} alt="Service example" />
                <img src={`/images/${data.img6}.jpg`} alt="Service example" />
            </div>
            <div className={ cls.descr_container }>
                <p className={ cls.heading }>{ data.title }</p>
                <p className={ cls.description }>{ data.description }</p>
                <div className={ cls.priceList }>
                    <div className={ cls.priceItem }>
                        <p>{ data.service1 }</p>
                        <span>${ data.price1 }</span>
                    </div>
                    <div className={ cls.priceItem }>
                        <p>{ data.service2 }</p>
                        <span>${ data.price2 }</span>
                    </div>
                    {data.service3 ? (
                        <div className={ cls.priceItem }>
                            <p>{ data.service3 }</p>
                            <span>${ data.price3 }</span>
                        </div>
                    )
                    : ''
                    }
                </div>
            </div>
        </section>
    );
}

export default ServiceList;
