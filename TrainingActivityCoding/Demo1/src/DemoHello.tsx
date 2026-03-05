interface DemoHelloProps {
    name: string;
}
function DemoHello(props: DemoHelloProps): string {
    return `Hello, ${props.name}! Welcome to the demo.`;
}

export default DemoHello;