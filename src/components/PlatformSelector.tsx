import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatform, { Platform } from '../hooks/usePlatforms'

interface Props {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatformId }: Props) => {
    const { data, error } = usePlatform();
    const selectedPlatform = data?.results.find(g => g.id === selectedPlatformId)
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform =>
                    <MenuItem
                        onClick={() => onSelectedPlatform(platform)}
                        key={platform.id}>
                        {platform.name}</MenuItem>)}

            </MenuList>

        </Menu>
    )
}

export default PlatformSelector