import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
//import { Container } from "@nextui-org/react";

function BlogHomePage() { 
    return (
    
        <Card>
            <Avatar src="https://nextui.org/images/hero-card.jpeg" />
            <h1>NextUI</h1>
            <p>NextUI is a React UI library that helps you build fast, accessible, and beautiful websites.</p>
            <Button>Get Started</Button>
        </Card>
        
    );
}

export default BlogHomePage;