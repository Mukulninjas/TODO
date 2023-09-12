import { useEffect, useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async () => {

    const res = await fetch("http://localhost:8080/api/todoapp", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title, description, date
      })
    });
    console.log(res);
    load();
  }

  const handleEdit = async (res) => {
    setTitle(res.title);
    setDescription(res.description);
    setDate(res.date);
  }

  const handledelete = async (id) => {
    const res = await fetch(`http://localhost:8080/api/todoapp/${id}`, {
      method: "delete",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    load();
  }

  const load = async () => {
    const res = await fetch("http://localhost:8080/api/todoapp", {
      method: "get",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const response = await res.json();
    console.log(response);
    setData(response);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div class="flex flex-col min-h-screen items-center bg-slate-300 p-5">
      <div class='w-full justify-center h-fit bg-white shadow-md rounded-lg overflow-hidden flex flex-col p-5 m-5'>
        <h3 class="text-2xl font-bold mb-4 mx-auto">Add TODO</h3>
        <div className='flex justify-center'>
          <div class="w-72 py-5 px-2">
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                type='text'
                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=' '
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Title
              </label>
            </div>
          </div>

          <div class="w-72 py-5 px-2">
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type='text'
                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=' '
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Desciption
              </label>
            </div>
          </div>

          <div class="w-72 py-5 px-2">
            <div class="relative h-10 w-full min-w-[200px]">
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type='date'
                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Date
              </label>
            </div>
          </div>

          <div class="py-5 px-2 flex justify-center">
            <button className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 shadow-md" onClick={handleSubmit}>Add</button>
          </div>
        </div>
      </div>
      {
        data.length > 0 ?
        <div className='w-full p-5'>
          <table className='w-full p-5 rounded shadow-lg bg-slate-100'>
            <th className='text-lg grid grid-cols-5 min-h-fit gap-2 py-3 place-content-evenly'>
              <td>Title</td>
              <td>Description</td>
              <td>Date</td>
              <td>Edit</td>
              <td>delete</td>
            </th>
            {
              data.map((res) => {
                return (<tr className='grid grid-cols-5 gap-2 min-h-fit place-content-evenly py-2 align-middle text-center even:bg-slate-500 last:rounded-b'>
                  <td className='m-auto'>{res.title}</td>
                  <td className='m-auto'>{res.description}</td>
                  <td className='m-auto'>{res.date}</td>
                  <td className='m-auto'><button className='border-solid border-2 bg-slate-100 border-slate-100 rounded-xl px-3 shadow-md hover:bg-slate-200' onClick={() => handleEdit(res)}>Edit</button></td>
                  <td className='m-auto'><button className='border-solid border-2 bg-slate-100 border-slate-100 rounded-xl px-3 shadow-md hover:bg-slate-200' onClick={() => handledelete(res._id)}>Delete</button></td>
                </tr>);
              })
            }
          </table>
          </div>
          :
          <div className='text-l p-5 text-red-500'>
            No data to show 😒
          </div>
      }
    </div>
  );
}

export default App;
