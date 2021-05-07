import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from "@testing-library/react"
import Button from './index'

test("seharusnya sih ga bisa di click kan disabled", () =>{
    const {container} = render(<Button isDisabled></Button>);
    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
test("seharusnya sih ngerender spinner/loading", () =>{
    const {container, getByText} = render(<Button isLoading></Button>);
    //expetasi ada kata loading di dalam dokumen
    expect(getByText(/loading/i)).toBeInTheDocument();
    //kenapa cuma span. karena button saat loading itu menggunakan span
    expect(container.querySelector("span")).toBeInTheDocument();
});
test("seharusnya sih ngerender <a> tag", () =>{
    const {container} = render(<Button type="link" isExternal></Button>);
    //kenapa cuma span. karena button saat di kasih props link jadi a
    expect(container.querySelector("a")).toBeInTheDocument();
});
test("seharusnya sih ngerender <Link> component", () =>{
    //bungkus dengan react router
    const {container} = render(
        <Router>
            <Button href="" type="link"></Button>
        </Router>
    );
    //kenapa cuma span. karena button saat di kasih props link jadi a
    expect(container.querySelector("a")).toBeInTheDocument();
});
