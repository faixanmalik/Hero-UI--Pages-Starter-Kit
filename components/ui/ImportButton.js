// components/ImportButton.js

import { BiImport } from 'react-icons/bi'; // Import icon
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { Button } from './button';
import { Tooltip } from "@heroui/react";

const ImportButton = ({ canImport, subscriptionData, handleFileUpload }) => {
  const router = useRouter();
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      {canImport ? (
        <div>
          <Button variant="outline" onClick={handleClick}>
            Import
            <BiImport className="text-lg ml-2" />
          </Button>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
        </div>
      ) : (
        <Tooltip content="Upgrade Your Plan" placement="right">
          <Button
            className="cursor-not-allowed text-xs items-center md:text-sm"
            disabled={!subscriptionData || !subscriptionData.id} // Disable if no subscription ID
            variant='outline'
            onClick={() => {
              if (subscriptionData && subscriptionData.id) {
                router.push(`/panel/upgradePlan?subscriptionID=${subscriptionData.id}`);
              } else {
                console.error('Subscription ID is missing');
              }
            }}
          >
            Import
            <BiImport className="text-lg ml-2" />
          </Button>
        </Tooltip>
      )}
    </>
  );
};

export default ImportButton;