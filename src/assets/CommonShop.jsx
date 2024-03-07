import { useEffect, useState } from "react";
import { Card, Image, TextInput, Group, Container } from "@mantine/core";

export const Label = ({section}) => {
    return(<div><Container fluid><div className="flex justify-center"><h1>
        {section}</h1></div></Container></div>)
}

export const ProductCard = ({title, image, price, quantity, lowerNumber, higherNumber, addToCart, disabled}) => {

return (<Card className="size-96 flex justify-content-around items-center border-black border-2 md:m-5 m-auto my-4">
    <Card.Section className="pt-12">
        <Image src={image} alt={title} className="size-40 max-w-fit"></Image>
    </Card.Section>
    <Card.Section className="text-center">
        <h2>{title}</h2>
        <p>${price}</p>
    </Card.Section>
    <Card.Section>
        <div className="flex flex-col justify-center">
        <Group>
        <button onClick={lowerNumber} disabled={disabled}>-</button>
        <TextInput type="number"
        value={quantity}
        className="w-14"
        readOnly></TextInput>
        <button onClick={higherNumber}>+</button>
        </Group>
        <button onClick={addToCart} disabled={disabled}>Add to cart</button>
        </div>
    </Card.Section>
</Card>)
}