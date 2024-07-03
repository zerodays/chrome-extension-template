/* eslint-disable react/jsx-no-literals */

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from 'cmdk';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from './components/ui/button';
import { cn } from './lib/utils';
import { api } from './zodios';

const types = ['general', 'programming', 'knock-knock', 'pun'];

const ZodiosClientExample = () => {
  const [open, setOpen] = useState(false);
  const [jokeType, setJokeType] = useState('general');
  const { data, isLoading, isRefetching } = api.useGetRandomJokeByType({
    params: {
      type: jokeType,
    },
  });
  const { mutate, isError } = api.useAddExample({
    params: {
      exampleId: 'example',
    },
  });

  return (
    <div className="ex-flex ex-flex-col ex-gap-y-2">
      <p>
        Below is the data returned from an external API connected through zodios
        client.
      </p>
      <div className="ex-flex ex-flex-row ex-gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="ex-grow ex-justify-between">
              {jokeType}
              <ChevronsUpDown className="ex-ml-2 ex-h-4 ex-w-4 ex-shrink-0 ex-opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="ex-w-full ex-bg-white ex-p-0">
            <Command>
              <CommandInput placeholder="Select Joke Type" />
              <CommandEmpty>{'No items found'}</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  {types.map((type) => (
                    <CommandItem
                      key={type}
                      value={type}
                      onSelect={(currentValue) => {
                        setJokeType(currentValue);
                        setOpen(false);
                      }}>
                      <Check
                        className={cn(
                          'ex-mr-2 ex-h-4 ex-w-4',
                          type === jokeType ? 'ex-opacity-100' : 'ex-opacity-0',
                        )}
                      />
                      {type}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Button
          variant="outline"
          onClick={() =>
            mutate({
              name: 'Example',
            })
          }>
          Trigger Error
        </Button>
      </div>
      <div className="ex-flex ex-h-16 ex-items-center ex-justify-center ex-py-6">
        {isLoading || isRefetching ? (
          <div>Loading...</div>
        ) : (
          <textarea
            readOnly
            className="ex-h-full ex-w-full ex-rounded-lg ex-p-4 ex-text-sm focus:ex-outline-foreground"
            value={data && JSON.stringify(data[0], null, 2)}
          />
        )}
      </div>
      {isError && <div className="ex-text-red-500">Error</div>}
    </div>
  );
};

export default ZodiosClientExample;
