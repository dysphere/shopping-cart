import { useEffect, useState } from "react";
import { Card, Image, TextInput, Group, Container } from "@mantine/core";

export const Label = ({section}) => {
    return(<div><Container fluid><div className="flex justify-center pt-10">
        <h1 className="font-bold text-xl">{section}</h1></div></Container></div>)
}

export const ProductCard = ({title, image, price, quantity, lowerNumber, higherNumber, addToCart, disabled}) => {

return (<Card className="size-96 flex justify-content-around items-center border-black border-2 md:m-5 m-auto my-4">
    <Card.Section className="pt-6">
        <Image src={image} alt={title} className="size-40 max-w-fit"></Image>
    </Card.Section>
    <Card.Section className="text-center">
        <h2>{title}</h2>
        <p>${price}</p>
    </Card.Section>
    <Card.Section>
        <div className="flex flex-col justify-center">
        <Group>
        <button onClick={lowerNumber} disabled={disabled} className="bg-stone-950 w-8 text-white rounded-full font-bold disabled:bg-slate-500">-</button>
        <TextInput type="number"
        value={quantity}
        className="w-14"
        readOnly></TextInput>
        <button onClick={higherNumber} className="bg-stone-950 w-8 text-white rounded-full font-bold">+</button>
        </Group>
        <button onClick={addToCart} disabled={disabled} className="bg-stone-950 mt-4 rounded-full text-white disabled:bg-slate-500">Add to cart</button>
        </div>
    </Card.Section>
</Card>)
}