import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import { recipeSchema, type RecipeFormData } from "../lib/recipe-schema";
import { RecipesContext } from "../context/RecipesContext";
import {
  RECIPE_CATEGORIES,
  RECIPE_DIFFICULTIES,
} from "../constants/recipe.constants";
import { useNavigate } from "react-router-dom";
import { DEFAULT_IMAGE } from "../constants/data";

const CreateRecipe = () => {
  const [submitted, setSubmitted] = useState(false);
  const { addRecipe } = useContext(RecipesContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RecipeFormData>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      title: "",
      category: RECIPE_CATEGORIES[0],
      difficulty: RECIPE_DIFFICULTIES[0],
      time: undefined,
      servings: 1,
      image: "",
      ingredients: [{ name: "" }],
      instructions: [{ step: "" }],
    },
  });

  const {
    fields: ingredientFields,
    append: addIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: instructionFields,
    append: addInstruction,
    remove: removeInstruction,
  } = useFieldArray({
    control,
    name: "instructions",
  });

  const onSubmit = (data: RecipeFormData) => {
    addRecipe({
      ...data,
      ingredients: data.ingredients.map((i) => i.name),
      instructions: data.instructions.map((i) => i.step),
      image: data.image || DEFAULT_IMAGE,
    });

    reset();
    navigate("/");

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-primary-bg">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="mb-3 font-inter text-5xl font-bold tracking-tight text-gray-900">
            Create New Recipe
          </h1>
          <p className="text-lg text-gray-600">
            Share your culinary masterpiece with the community
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          {/* ---------- Basic Info ---------- */}
          <section className="bg-white rounded-2xl shadow-md p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Basic Information
            </h2>
            <p className="text-gray-500 text-sm">
              The essential details about your recipe
            </p>

            {/* Recipe Title */}
            <div className="flex flex-col">
              <label htmlFor="title" className="mb-1 font-medium text-gray-700">
                Recipe Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="e.g., Grandma's Apple Pie"
                {...register("title")}
                className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.title && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Category & Difficulty */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">
                  Category
                </label>
                <Controller
                  control={control}
                  name="category"
                  render={({ field }) => (
                    <select
                      {...field}
                      className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {RECIPE_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.category && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">
                  Difficulty
                </label>
                <Controller
                  control={control}
                  name="difficulty"
                  render={({ field }) => (
                    <select
                      {...field}
                      className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {RECIPE_DIFFICULTIES.map((diff) => (
                        <option key={diff} value={diff}>
                          {diff}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            </div>

            {/* Time & Servings */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">
                  Total Time (min)
                </label>
                <input
                  type="number"
                  {...register("time", { valueAsNumber: true })}
                  placeholder="e.g., 45"
                  className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.time && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.time.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">
                  Servings
                </label>
                <input
                  type="number"
                  {...register("servings", { valueAsNumber: true })}
                  placeholder="e.g., 4"
                  className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.servings && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.servings.message}
                  </p>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                {...register("image")}
                placeholder="https://example.com/image.jpg"
                className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.image && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.image.message}
                </p>
              )}
            </div>
          </section>

          {/* ---------- Ingredients ---------- */}
          <section className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ingredients
            </h2>
            <p className="text-gray-500 text-sm">
              List all the ingredients needed
            </p>

            {ingredientFields.map((field, index) => (
              <div key={field.id} className="flex gap-3 items-center">
                <input
                  {...register(`ingredients.${index}.name` as const)}
                  placeholder={`Ingredient ${index + 1}`}
                  className="flex-1 px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.ingredients?.[index]?.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.ingredients[index]?.name?.message}
                  </p>
                )}
                {ingredientFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeIngredient(index)}
                    className="h-10 w-10 flex items-center justify-center rounded-xl bg-red-500 hover:bg-red-600 text-white"
                  >
                    <BiTrash className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => addIngredient({ name: "" })}
              className="w-full mt-2 h-12 rounded-xl border-2 border-dashed border-gray-300 text-gray-700 flex items-center justify-center gap-2 hover:border-purple-400 hover:bg-purple-50 transition-colors"
            >
              <BiPlus className="w-5 h-5" /> Add Ingredient
            </button>
          </section>

          {/* ---------- Instructions ---------- */}
          <section className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Instructions
            </h2>
            <p className="text-gray-500 text-sm">
              Step-by-step cooking instructions
            </p>

            {instructionFields.map((field, index) => (
              <div key={field.id} className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                    {index + 1}
                  </div>
                  <span className="font-semibold text-gray-700">
                    Step {index + 1}
                  </span>
                  {instructionFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeInstruction(index)}
                      className="ml-auto h-8 w-8 flex items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 text-white"
                    >
                      <BiTrash className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <textarea
                  {...register(`instructions.${index}.step` as const)}
                  placeholder={`Describe step ${index + 1} in detail...`}
                  rows={3}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.instructions?.[index]?.step && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.instructions[index]?.step?.message}
                  </p>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => addInstruction({ step: "" })}
              className="w-full mt-2 h-12 rounded-xl border-2 border-dashed border-gray-300 text-gray-700 flex items-center justify-center gap-2 hover:border-purple-400 hover:bg-purple-50 transition-colors"
            >
              <BiPlus className="w-5 h-5" /> Add Step
            </button>
          </section>

          {/* ---------- Publish Button ---------- */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 h-14 btn-primary rounded-xl disabled:opacity-50 transition-colors"
            >
              Publish Recipe
            </button>
          </div>

          {submitted && (
            <p className="text-green-600 font-semibold mt-4">
              Recipe submitted successfully!
            </p>
          )}
        </form>
      </main>
    </div>
  );
};

export default CreateRecipe;
