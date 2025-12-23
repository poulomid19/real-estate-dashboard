import { useState } from 'react'
import axios from "axios"
const ProjectForm = () => {
    const [form, setForm] = useState({
        title:"",
        location:"",
        priceRange:"",
        highlights:{
            stage:"",
            possesionDate:"",
            floor:"",
            reraId:""
        },
        about:"",
        configuration:{
          type:"",
          price:"",
          size:""
        },
        amenities: {
      sports: [""],
      convenience: [""],
      safety: [""],
      leisure: [""],
      environment: [""],
      furnishing: [""],
    },
    maplocation:"",
    developer: {
      devname: "",
      totalProjects: "",
      totalYears: "",
      description: "",
    },
    images:[""]
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setForm((prev)=>{
            return ({...prev, [name]:value})
        })
    }
    const submitHandler= async(e)=>{
      e.preventDefault()
      try {
          const res = await axios.post("http://localhost:3000/api/addproject", form,{
        withCredentials: true,
      })
          console.log(res.data)
          setForm({
            title:"",
        location:"",
        priceRange:"",
        highlights:{
            stage:"",
            possesionDate:"",
            floor:"",
            reraId:""
        },
        about:"",
        configuration:{
          type:"",
          price:"",
          size:""
        },
        amenities: {
      sports: [""],
      convenience: [""],
      safety: [""],
      leisure: [""],
      environment: [""],
      furnishing: [""],
    },
    maplocation:"",
    developer: {
      devname: "",
      totalProjects: "",
      totalYears: "",
      description: "",
    },
    images:[""]
          })
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <>
       <form
  className="flex flex-col gap-6 p-6 max-w-7xl mx-auto"
  onSubmit={submitHandler}
>
  <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

    {/*COLUMN 1*/}
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Project Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Location</label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Price Range</label>
        <input
          type="text"
          name="priceRange"
          value={form.priceRange}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* HIGHLIGHTS */}
      <div className="space-y-2">
        <label className="block font-semibold">Project Highlights</label>

        <div>
          <label className="block mb-1 font-medium">Stage</label>
          <input
            type="text"
            placeholder="Mid / New Launch"
            value={form.highlights.stage}
            onChange={(e) =>
              setForm({
                ...form,
                highlights: { ...form.highlights, stage: e.target.value },
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Possession Date</label>
          <input
            type="date"
            value={form.highlights.possesionDate}
            onChange={(e) =>
              setForm({
                ...form,
                highlights: {
                  ...form.highlights,
                  possesionDate: e.target.value,
                },
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Floor Plans</label>
          <input
            type="text"
            placeholder="2BHK, 3BHK"
            value={form.highlights.floor}
            onChange={(e) =>
              setForm({
                ...form,
                highlights: { ...form.highlights, floor: e.target.value },
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">RERA ID</label>
          <input
            type="text"
            value={form.highlights.reraId}
            onChange={(e) =>
              setForm({
                ...form,
                highlights: { ...form.highlights, reraId: e.target.value },
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>

    {/*COLUMN 2 */}
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">About</label>
        <textarea
          rows={4}
          name="about"
          value={form.about}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="space-y-2">
        <label className="block font-semibold">Configuration</label>
        <div>
          <label className="block mb-1 font-medium">Type</label>
          <input
            type="text"
            value={form.configuration.type}
            onChange={(e) =>
              setForm({
                ...form,
                configuration: {
                  ...form.configuration,
                  type: e.target.value,
                },
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="text"
            value={form.configuration.price}
            onChange={(e) =>
              setForm({
                ...form,
                configuration: {
                  ...form.configuration,
                  price: e.target.value,
                },
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Size</label>
          <input
            type="text"
            value={form.configuration.size}
            onChange={(e) =>
              setForm({
                ...form,
                configuration: {
                  ...form.configuration,
                  size: e.target.value,
                },
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>

    {/*COLUMN 3 */}
    <div className="space-y-4">
      <label className="block font-semibold">Amenities</label>
{Object.keys(form.amenities).map((cat) => (
  <div key={cat} className="space-y-2">
    <label className="font-medium capitalize">{cat}</label>

    {form.amenities[cat].map((item, index) => (
      <div key={index} className="flex gap-2 mb-2">
        <input
          value={item}
          placeholder={`Add ${cat}`}
          onChange={(e) => {
            const updated = [...form.amenities[cat]];
            updated[index] = e.target.value;
            setForm({
              ...form,
              amenities: { ...form.amenities, [cat]: updated },
            });
          }}
          className="w-full p-2 border rounded"
        />
      </div>
    ))}
      <button
      type="button" onClick={() => setForm({...form,amenities: { ...form.amenities, [cat]: [...form.amenities[cat], ""] },
       })
      }
      className="bg-gray-600 text-white px-3 py-1 rounded">+ Add {cat} </button>
  </div>
))}

    </div>

    {/*COLUMN 4*/}
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Map Location</label>
        <input
          type="text"
          name="maplocation"
          value={form.maplocation}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="space-y-2">
        <label className="block font-semibold">Developers</label>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={form.developer.devname}
            onChange={(e) =>
              setForm({
                ...form,
                developer: { ...form.developer, devname: e.target.value },
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Total Projects</label>
          <input
            type="text"
            value={form.developer.totalProjects}
            onChange={(e) =>
              setForm({
                ...form,
                developer: { ...form.developer, totalProjects: e.target.value },
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Total Years</label>
          <input
            type="text"
            value={form.developer.totalYears}
            onChange={(e) =>
              setForm({
                ...form,
                developer: { ...form.developer, totalYears: e.target.value },
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <input
            type="text"
            value={form.developer.description}
            onChange={(e) =>
              setForm({
                ...form,
                developer: {
                  ...form.developer,
                  description: e.target.value,
                },
              })
            }
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Images</label>
        {form.images.map((img, index) => (
          <div>
          <input
            key={index}
            value={img}
            placeholder="Paste Image URL"
            onChange={(e) => {
              const updated = [...form.images];
              updated[index] = e.target.value;
              setForm({ ...form, images: updated });
            }}
            className="w-full p-2 border rounded"
          />
          <button
  type="button"
  onClick={() => setForm({ ...form, images: [...form.images, ""] })}
  className="bg-gray-600 text-white px-4 py-2 rounded mt-2"
>
  + Add Another Image
</button>
</div>
        ))}
      </div>
    </div>
  </div>

  <div className="mt-4 mx-auto">
    <button
      className="bg-blue-600 text-white py-2 rounded w-20"
      type="submit"
    >
      Submit
    </button>
  </div>
</form>
    </>
  )
}

export default ProjectForm