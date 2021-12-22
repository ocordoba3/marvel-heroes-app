import React from 'react'
import { Comic } from '../../types'
import { Card } from './styles'

export const HeroesCard = ({ id, title, thumbnail, creators, price }: Comic) => {
    return (
        <Card>
            <div className='card__img-container'>
                <img loading='lazy' src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`} alt={`Comic-${id}`} width={'auto'} height={'auto'} />
            </div>
            <div className='card__text-container'>
                <h4 className='card__comic-name'>{title}</h4>
                <p className='card__comic-creator'>{creators[0]?.name}</p>
                <span className='card__comic-price'>{price !== 0 ? `${price} USD` : 'FREE'}</span>
            </div>
        </Card>
    )
}
