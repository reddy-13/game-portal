import { Box, Heading, Text } from '@chakra-ui/react';
import DefinationItem from '../components/DefinationItem';

const AboutPage = () => {
    const techStack = [
        { id: 1, name: "React" },
        { id: 2, name: "TypeScript" },
        { id: 3, name: "ReactQuey" },
        { id: 4, name: "Zustand" },
        { id: 5, name: "React Icons" },
        { id: 6, name: "React Router DOM" },
        { id: 7, name: "React Infiinte Scroll" },
        { id: 8, name: "Chaakra UI" },
        { id: 9, name: "Vite Bundler" },
    ];
    return (
        <>
            <Heading>About Game Portal</Heading>
            <Box mt={3}>
                <Text>This game portal created for projects showcasing purpose using game API.</Text>
                <DefinationItem term='Technical Deails'>
                    {techStack.map((t => <Text key={t.id}>{t.name}</Text>))}
                </DefinationItem>
            </Box>
        </>
    )
}

export default AboutPage