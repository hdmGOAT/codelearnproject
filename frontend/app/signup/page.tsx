import { Form, FormField } from "@/components/ui/form";
import React from "react";

const SignupPage = () => {
  return (<div>
    <Form>
  <FormField
    control={...}
    name="..."
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */}
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
</Form>

  </div>);
};

export default SignupPage;
