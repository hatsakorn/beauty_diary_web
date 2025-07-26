import { useState } from "react";
import { Button, Modal, TextInput } from "flowbite-react";
import * as packageApi from "../apis/package-api";
import SelectionPackage from "../features/package/SelectionPackage";
import { useNavigate } from "react-router-dom";

const initialInput = {
  title: "",
  price: "",
  topup: "",
  packageImage: "",
  adsImage: "",
};

function PackageModal({ openModal, onClose, allPackage }) {
  const [input, setInput] = useState(initialInput);
  const [isEdit, setIsEdit] = useState(false);
  // const [selectedPackage,setSelectedPackage] = useState({})

  const navigate = useNavigate();

  // useEffect(()=>{
  //   if(isEdit===true){
  //   }
  // },[])

  // const handleShowExistPackage = (showPackage) => {
  //   setInput(showPackage)
  // }

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const payload = { ...input };
      payload.packageImage = input.packageImage ? input.packageImage : null;
      payload.adsImage = input.adsImage ? input.adsImage : null;

      if (isEdit === false) {
        await packageApi.createPackage(payload);
        setInput(initialInput);
        onClose();
        navigate(0);
      } else {
        await packageApi.editPackage(payload);
        setInput(initialInput);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getPackageObj = async (value) => {
    // const packages = await allPackage.find(el=>el.id === +value.id)
    // setSelectedPackage(packages)
    // console.log(selectedPackage)
  };

  const handleDelete = async () => {
    // console.log(selectedPackage.id)
    const { id } = input;
    await packageApi.deletePackage(id);
    navigate("/");
    // console.log(result)
    // console.log(packageToDelete)
    // await packageApi.deletePackage(el.title)
  };

  const handleChangeEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <>
      <Modal show={openModal} size="md" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmitForm}>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                Add Package
              </h3>
              {isEdit === false ? (
                ""
              ) : (
                <SelectionPackage
                  allPackage={allPackage}
                  input={input}
                  setInput={setInput}
                  getPackageObj={getPackageObj}
                />
              )}
              <div>
                <div className="mb-2 block"></div>
                <TextInput
                  id="title"
                  placeholder="Package Name"
                  name="title"
                  value={input.title}
                  required={true}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <div className="mb-2 block"></div>
                <TextInput
                  id="price"
                  placeholder="package price"
                  name="price"
                  value={input.price}
                  required={true}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <div className="mb-2 block"></div>
                <TextInput
                  id="topup"
                  placeholder="topup price"
                  name="topup"
                  value={input.topup}
                  required={true}
                  onChange={handleChangeInput}
                />
              </div>

              <div>
                <div className="mb-2 block"></div>
                <TextInput
                  id="packageImage"
                  type="file"
                  name="packageImage"
                  accept="image/*,.jpg,.pdf,.png"
                  value={input.packageImage}
                  onChange={handleChangeInput}
                />
              </div>
              <label>Package Image</label>
              <div>
                <div className="mb-2 block"></div>
                <TextInput
                  id="adsImage"
                  type="file"
                  name="adsImage"
                  accept="image/*,.jpg,.pdf,.png"
                  value={input.adsImage}
                  onChange={handleChangeInput}
                />
              </div>
              <label>advertisement Image</label>
              {isEdit === false ? (
                <div className="flex justify-center">
                  <Button type="submit">Add</Button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between py-4">
                    <Button type="submit">Edit</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                  </div>
                </>
              )}
              <div className="flex justify-center">
                <Button type="button" onClick={handleChangeEdit}>
                  Switch to Edit or delete
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PackageModal;
