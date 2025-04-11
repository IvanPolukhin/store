import WebApp from '@twa-dev/sdk'

import { useStore } from 'src/store'

import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { fetchProjects } from 'src/api/api'

import { componentMap, getComponentTypeFromSource } from 'src/helpers/sourcing'

import { CardSource, ComponentType } from 'src/types'

import { ProjectsResponse } from 'src/pages/Catalog/types'

import {
  CardData,
  createCardData,
} from 'src/components/shared/CatalogCard/types.ts'

export const useCatalog = (source?: string) => {
  const { source: paramSource } = useParams<{ source: string }>()
  const effectiveSource = source || paramSource
  const { setProducts } = useStore()

  const getComponentType = (): ComponentType | null =>
    getComponentTypeFromSource(effectiveSource)

  const query = useQuery<ProjectsResponse, Error, CardData[]>({
    queryKey: ['projects', effectiveSource],
    queryFn: () => fetchProjects(effectiveSource ?? ''),
    enabled: !!effectiveSource,
    select: response =>
      response.data.map(item =>
        createCardData({
          ...item,
          category: effectiveSource as CardSource,
        }),
      ),
  })

  const componentType = getComponentType()
  const Component = componentType ? componentMap[componentType] : null

  useEffect(() => {
    if (query.data) {
      setProducts(query.data)
    }
  }, [query.data, setProducts])

  return {
    data: query.data ?? [],
    error: query.error,
    isLoading: query.isLoading,
    Component,
    isValidSource: componentType !== null,
    initData: WebApp.initData,
  }
}
