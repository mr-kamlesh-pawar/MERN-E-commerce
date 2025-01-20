import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import React, { Fragment, useState } from "react";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  brand: "",
  category: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

function onSubmit() {
  // handle form submission
}
const AdminProducts = () => {
  const [openCreateProductDialog, setOpenCreateProductDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile]= useState(null);
  const [uploadedImageUrl, setUploadedImageUrl]= useState('');
  const [imageLoadingState, setImageLoadingState ] = useState(false);
  
  return (
    <Fragment>
      <div className="mb-5 flex justify-end w-full">
        <Button onClick={() => setOpenCreateProductDialog(true)}>
          {" "}
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Sheet
       
          open={openCreateProductDialog}
          onOpenChange={() => setOpenCreateProductDialog(false)}
        >
          <SheetContent>
            <SheetHeader  >
              <SheetTitle>Add New Product</SheetTitle>
            </SheetHeader>
            <ProductImageUpload  imageFile={imageFile} setImageFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl}/>
            <div className="py-6">
              <CommonForm
                formData={formData}
                setFormData={setFormData}
                buttonText="Add"
                formControls={addProductFormElements}
                onSubmit={onSubmit}
              ></CommonForm>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
};

export default AdminProducts;
