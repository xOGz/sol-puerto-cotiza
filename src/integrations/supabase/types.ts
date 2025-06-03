export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      analytics: {
        Row: {
          fecha_visita: string | null
          id: string
          ip_address: unknown | null
          pagina: string
          referrer: string | null
          tiempo_sesion: number | null
          user_agent: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          fecha_visita?: string | null
          id?: string
          ip_address?: unknown | null
          pagina: string
          referrer?: string | null
          tiempo_sesion?: number | null
          user_agent?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          fecha_visita?: string | null
          id?: string
          ip_address?: unknown | null
          pagina?: string
          referrer?: string | null
          tiempo_sesion?: number | null
          user_agent?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          contenido: string
          estado: Database["public"]["Enums"]["post_status"] | null
          extracto: string | null
          fecha_actualizacion: string | null
          fecha_creacion: string | null
          fecha_publicacion: string | null
          id: string
          imagen_destacada: string | null
          keywords: string | null
          meta_description: string | null
          meta_title: string | null
          slug: string
          titulo: string
          vistas: number | null
        }
        Insert: {
          contenido: string
          estado?: Database["public"]["Enums"]["post_status"] | null
          extracto?: string | null
          fecha_actualizacion?: string | null
          fecha_creacion?: string | null
          fecha_publicacion?: string | null
          id?: string
          imagen_destacada?: string | null
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          slug: string
          titulo: string
          vistas?: number | null
        }
        Update: {
          contenido?: string
          estado?: Database["public"]["Enums"]["post_status"] | null
          extracto?: string | null
          fecha_actualizacion?: string | null
          fecha_creacion?: string | null
          fecha_publicacion?: string | null
          id?: string
          imagen_destacada?: string | null
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          slug?: string
          titulo?: string
          vistas?: number | null
        }
        Relationships: []
      }
      configuraciones: {
        Row: {
          clave: string
          descripcion: string | null
          fecha_actualizacion: string | null
          id: string
          valor: string | null
        }
        Insert: {
          clave: string
          descripcion?: string | null
          fecha_actualizacion?: string | null
          id?: string
          valor?: string | null
        }
        Update: {
          clave?: string
          descripcion?: string | null
          fecha_actualizacion?: string | null
          id?: string
          valor?: string | null
        }
        Relationships: []
      }
      contactos: {
        Row: {
          asunto: string | null
          email: string
          estado: Database["public"]["Enums"]["contact_status"] | null
          fecha_actualizacion: string | null
          fecha_creacion: string | null
          id: string
          ip_address: unknown | null
          mensaje: string
          municipio: string | null
          nombre: string
          telefono: string | null
        }
        Insert: {
          asunto?: string | null
          email: string
          estado?: Database["public"]["Enums"]["contact_status"] | null
          fecha_actualizacion?: string | null
          fecha_creacion?: string | null
          id?: string
          ip_address?: unknown | null
          mensaje: string
          municipio?: string | null
          nombre: string
          telefono?: string | null
        }
        Update: {
          asunto?: string | null
          email?: string
          estado?: Database["public"]["Enums"]["contact_status"] | null
          fecha_actualizacion?: string | null
          fecha_creacion?: string | null
          id?: string
          ip_address?: unknown | null
          mensaje?: string
          municipio?: string | null
          nombre?: string
          telefono?: string | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          consumo: string
          email: string | null
          estado: Database["public"]["Enums"]["lead_status"] | null
          fecha_actualizacion: string | null
          fecha_creacion: string | null
          id: string
          ip_address: unknown | null
          mensaje: string | null
          municipio: string
          nombre: string
          telefono: string
          user_agent: string | null
        }
        Insert: {
          consumo: string
          email?: string | null
          estado?: Database["public"]["Enums"]["lead_status"] | null
          fecha_actualizacion?: string | null
          fecha_creacion?: string | null
          id?: string
          ip_address?: unknown | null
          mensaje?: string | null
          municipio: string
          nombre: string
          telefono: string
          user_agent?: string | null
        }
        Update: {
          consumo?: string
          email?: string | null
          estado?: Database["public"]["Enums"]["lead_status"] | null
          fecha_actualizacion?: string | null
          fecha_creacion?: string | null
          id?: string
          ip_address?: unknown | null
          mensaje?: string | null
          municipio?: string
          nombre?: string
          telefono?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      newsletter: {
        Row: {
          activo: boolean | null
          email: string
          fecha_confirmacion: string | null
          fecha_suscripcion: string | null
          id: string
          nombre: string | null
          token_confirmacion: string | null
        }
        Insert: {
          activo?: boolean | null
          email: string
          fecha_confirmacion?: string | null
          fecha_suscripcion?: string | null
          id?: string
          nombre?: string | null
          token_confirmacion?: string | null
        }
        Update: {
          activo?: boolean | null
          email?: string
          fecha_confirmacion?: string | null
          fecha_suscripcion?: string | null
          id?: string
          nombre?: string | null
          token_confirmacion?: string | null
        }
        Relationships: []
      }
      testimonios: {
        Row: {
          activo: boolean | null
          ahorro_mensual: number | null
          calificacion: number | null
          fecha_creacion: string | null
          foto: string | null
          id: string
          municipio: string
          nombre: string
          orden_display: number | null
          testimonio: string
        }
        Insert: {
          activo?: boolean | null
          ahorro_mensual?: number | null
          calificacion?: number | null
          fecha_creacion?: string | null
          foto?: string | null
          id?: string
          municipio: string
          nombre: string
          orden_display?: number | null
          testimonio: string
        }
        Update: {
          activo?: boolean | null
          ahorro_mensual?: number | null
          calificacion?: number | null
          fecha_creacion?: string | null
          foto?: string | null
          id?: string
          municipio?: string
          nombre?: string
          orden_display?: number | null
          testimonio?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      contact_status: "nuevo" | "respondido" | "cerrado"
      lead_status:
        | "nuevo"
        | "contactado"
        | "cotizado"
        | "convertido"
        | "perdido"
      post_status: "borrador" | "publicado" | "archivado"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      contact_status: ["nuevo", "respondido", "cerrado"],
      lead_status: ["nuevo", "contactado", "cotizado", "convertido", "perdido"],
      post_status: ["borrador", "publicado", "archivado"],
    },
  },
} as const
