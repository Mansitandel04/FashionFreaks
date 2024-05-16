import React from "react";
import { useState } from "react";
// import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Grid, LinearProgress, Rating, Box } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
// import { yellow } from "@mui/material/colors";

// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Trending } from "../../Data/Trending";

const product = {
  name: "Brush Stroke Printed Shirt",
  price: "₹999",
  href: "#",
  breadcrumbs: [{ id: 1, name: "women", href: "/" }],
  images: [
    {
      src: "https://freakins.com/cdn/shop/files/DSC01970.jpg?v=1705949545&width=900",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://freakins.com/cdn/shop/files/DSC01937_937e0ddb-3a1b-4f5c-94a4-15658e657819.jpg?v=1705949545&width=900",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://freakins.com/cdn/shop/files/DSC01984_f56b9cae-a42a-47ae-81ac-071335a2f405.jpg?v=1705949412&width=900",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://freakins.com/cdn/shop/files/DSC01962_2c22eb40-ac75-4bfe-b89c-116511d80533.jpg?v=1705949543&width=900",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: false },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
 
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10 ">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem]  max-h-[35rem]">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[6rem] max-h-[6rem] mt-4">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:mx-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                Brush Stroke Printed Shirt
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold ">₹999</p>
                <p className="opacity-50 line-through">₹1199</p>
                <p className="font-semibold text-red-600">17% off</p>
              </div>

              {/* Reviews */}

              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={4} readOnly />
                  <p className="opacity-50 text-sm "> 55650 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {" "}
                    3870 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-6 gap-3 sm:grid-cols-8 lg:grid-cols-6 ">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-gray-900" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-gray-900"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
               <a href="/checkout">
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
                </a>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    Brush Stroke Printed Shirt. A fusion of art and fashion,
                    this shirt features bold brushstroke patterns, perfect for
                    making a statement. Crafted for comfort and style, it's the
                    ideal choice for any occasion.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {/* {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))} */}
                    <li> 100% Viscose | Rigid</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Manufactured By
                </h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    Since99 Apparel Private Limited H No-104, I-2, Sai dhara
                    Warehousing Complex, Bhoirgaon, Bhiwandi, Kharbav, Thane,
                    Maharashtra - 421302, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* rating and reviews */}
        <section>
          <h1 className="font-semibold text-lg pb-4">
            Reacent Review and Rating
          </h1>
          <div className="border p-5 ">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1, 1].map((item) => (
                    <ProductReviewCard />
                  ))}
                </div>
              </Grid>
              <Grid item xs={5} className="sm:text-sm">
                <h1 className="text-xl font-semibold pb-2">Product Ratings</h1>
                <div className="flex items-center space-x-3">
                  <Rating value={4.6} precision={0.5} readOnly></Rating>
                  <p className="opacity-70"> 54654 Ratings</p>
                </div>

                <Box className="mt-5">
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid items xs={2}>
                      <p> Exellent</p>
                    </Grid>
                    <Grid items xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={50}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box className="mt-5">
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid items xs={2}>
                      <p> very good</p>
                    </Grid>
                    <Grid items xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box className="mt-5">
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid items xs={2}>
                      <p> Good</p>
                    </Grid>
                    <Grid items xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: 4,
                          height: 7,
                          color: "yellow",
                        }}
                        variant="determinate"
                        value={25}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box className="mt-5">
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid items xs={2}>
                      <p> Avarage</p>
                    </Grid>
                    <Grid items xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={20}
                        color="warning"
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box className="mt-5">
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid items xs={2}>
                      <p className="sm:text-md"> Poor</p>
                    </Grid>
                    <Grid items xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={10}
                        color="error"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* similar producr */}
        <section className="pt-10">
          <h1 className="py-5 text-xl font-bold"> Similar products</h1>
          <div className="flex flex-wrap space-y-5">
            {Trending.map((item) => (
              <div className="cursor-pointer flex flex-col  bg-white overflow-hidden w-[250px] h-[350px] mx-2 py-1 ">
                <div className="h-[250px] w-[200px]">
                  <img
                    className="object-cover object-top w-full h-full mt-1 items-center rounded-[14px] shadow shadow-lg "
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="p-3 ">
                  <h3 className="text-md font-lg text-grey-900">
                    {item.brand}{" "}
                  </h3>
                  <p className="  text-md text-red-700 font-bold">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}