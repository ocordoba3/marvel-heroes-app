import React from 'react'
import { Comic } from '../../types'
import { Card } from './styles'

export const HeroesCard = ({ id, title, thumbnail, creators, price }: Comic) => {

    const url = thumbnail.path.replace(/^http:\/\//i, 'https://');
    
    return (
        <Card>
            <div className='card__img-container'>
                <img loading='lazy' src={`${url}/portrait_xlarge.${thumbnail.extension}`} alt={`Comic-${id}`} width={'80%'} height={'100%'} />
            </div>
            <div className='card__text-container'>
                <h2 className='card__comic-name'>{title}</h2>
                <p className='card__comic-creator'>{creators[0]?.name ? creators[0]?.name : 'No creator'}</p>
                <span className='card__comic-price'>{price !== 0 ? `${price} USD` : 'FREE'}</span>
            </div>
        </Card>
    )
}
