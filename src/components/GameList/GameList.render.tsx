import React, { ChangeEvent, ReactElement } from 'react'
import { Game } from 'types'
import GameCard from 'components/GameCard'
import GameFilter from 'components/GameFilter'
import { List, ListItem } from './styles'
interface Props {
	err?: string
	games: Game[]
	onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
	if (err) {
		return <p>No se han encontrado Juegos</p>
	}
	if (!games?.length) {
		return <p>No hay juegos Disnopibles</p>
	}
	return (
		<>
			<GameFilter onChange={onFilterChange} />
			<List>
				{games.map(game => (
					<ListItem key={game.id}>
						<GameCard content={game} />
					</ListItem>
				))}
			</List>
		</>
	)
}

export default GameList;