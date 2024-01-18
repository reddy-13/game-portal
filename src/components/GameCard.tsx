import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScrore from './CriticScrore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'
import { Link } from 'react-router-dom'


interface Props {
    game: Game
}
const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack marginBottom={3} justifyContent={"space-between"}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScrore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>
                    <Link to={`/games/${game.slug}`}>
                        {game.name} <Emoji rating={game.rating_top} />
                    </Link>
                </Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard