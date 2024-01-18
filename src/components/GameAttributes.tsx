
import { Game } from '../entities/Game'
import { SimpleGrid, Text } from '@chakra-ui/react'
import CriticScrore from './CriticScrore'
import DefinationItem from './DefinationItem'

interface Props {
    game: Game
}

const GameAttributes = ({ game }: Props) => {
    return (
        <SimpleGrid columns={2} as="dl">

            <DefinationItem term="Patforms">
                {game.parent_platforms?.map(({ platform }) => <Text key={platform.id}> {platform.name}</Text>)}
            </DefinationItem>
            <DefinationItem term="Metascore">
                <CriticScrore score={game.metacritic} />
            </DefinationItem>
            <DefinationItem term="Genres">
                {game.genres.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
            </DefinationItem>
            <DefinationItem term="Publishers">
                {game.publishers?.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)}
            </DefinationItem>
        </SimpleGrid>
    )
}

export default GameAttributes